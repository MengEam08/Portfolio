import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import { Children, cloneElement, useEffect, useMemo, useRef, useState } from "react";

function DockItem({
  children,
  className = "",
  onClick,
  href,
  target,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  label
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return Infinity;
    return val - (rect.left + rect.width / 2);
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  const iconScale = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [1, 1.25, 1]
  );
  const scale = useSpring(iconScale, spring);

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    } else if (href) {
      if (href.startsWith("mailto") || href === "#") {
        window.location.href = href;
      } else {
        window.open(href, target || "_blank", "noopener,noreferrer");
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(e);
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`relative inline-flex items-center justify-center rounded-2xl cursor-pointer select-none transition-shadow ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
      aria-label={label}
    >
      <motion.div style={{ scale }} className="flex items-center justify-center">
        {Children.map(children, (child) =>
          child ? cloneElement(child, { isHovered }) : null
        )}
      </motion.div>
    </motion.div>
  );
}

function DockLabel({ children, className = "", ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.15 }}
          className={`absolute -top-7 left-1/2 w-fit whitespace-nowrap rounded-md border border-slate-700/60 dark:border-slate-800 bg-slate-900/95 text-slate-200 backdrop-blur-md px-2 py-0.5 text-[11px] font-medium shadow-lg pointer-events-none z-30 ${className}`}
          role="tooltip"
          style={{ x: "-50%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 64,
  distance = 140,
  panelHeight = 56,
  dockHeight = 76,
  baseItemSize = 46
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + 12),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{ height }}
      className="flex items-center w-fit overflow-visible"
    >
      <motion.div
        onMouseMove={(e) => {
          isHovered.set(1);
          mouseX.set(e.clientX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`flex items-center w-fit gap-3 py-1 ${className}`}
        role="toolbar"
        aria-label="Social links dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            href={item.href}
            target={item.target}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            label={item.label}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}

export { DockItem, DockLabel, DockIcon };
