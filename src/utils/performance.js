// Performance monitoring utilities

export const measurePerformance = () => {
  if (typeof window !== "undefined" && "performance" in window) {
    // Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "navigation") {
          console.log("Navigation timing:", {
            domContentLoaded:
              entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
            loadComplete: entry.loadEventEnd - entry.loadEventStart,
            firstByte: entry.responseStart - entry.requestStart,
          });
        }

        if (entry.entryType === "paint") {
          console.log(`${entry.name}:`, entry.startTime);
        }

        if (entry.entryType === "largest-contentful-paint") {
          console.log("LCP:", entry.startTime);
        }
      }
    });

    observer.observe({
      entryTypes: ["navigation", "paint", "largest-contentful-paint"],
    });

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log("FID:", entry.processingStart - entry.startTime);
      }
    });

    fidObserver.observe({ entryTypes: ["first-input"] });

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          console.log("CLS:", clsValue);
        }
      }
    });

    clsObserver.observe({ entryTypes: ["layout-shift"] });
  }
};

// Resource loading optimization
export const preloadCriticalResources = () => {
  const criticalResources = [
    "/src/assets/dummylogo.png",
    // Add other critical resources
  ];

  criticalResources.forEach((resource) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = resource;
    link.as =
      resource.endsWith(".png") || resource.endsWith(".jpg")
        ? "image"
        : "fetch";
    document.head.appendChild(link);
  });
};

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if ("memory" in performance) {
    const memInfo = performance.memory;
    console.log("Memory usage:", {
      used: Math.round(memInfo.usedJSHeapSize / 1048576) + " MB",
      total: Math.round(memInfo.totalJSHeapSize / 1048576) + " MB",
      limit: Math.round(memInfo.jsHeapSizeLimit / 1048576) + " MB",
    });
  }
};

// Bundle size analysis
export const analyzeBundleSize = () => {
  if (typeof window !== "undefined") {
    const scripts = document.querySelectorAll("script[src]");
    let totalSize = 0;

    scripts.forEach((script) => {
      fetch(script.src, { method: "HEAD" })
        .then((response) => {
          const size = response.headers.get("content-length");
          if (size) {
            totalSize += parseInt(size);
            console.log(
              `Script ${script.src}: ${(parseInt(size) / 1024).toFixed(2)} KB`
            );
          }
        })
        .catch(() => {});
    });
  }
};
