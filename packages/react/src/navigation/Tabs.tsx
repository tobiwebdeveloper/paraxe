import { createContext, useContext, useEffect, useState } from "react";
import type { TabsProps } from "@paraxe/core";
import type { ReactNode } from "react";
const TabsContext = createContext<{
  active: string | number | null;
  select: (value: string | number) => void;
} | null>(null);
export function Tabs({
  modelValue = null,
  onModelValueChange,
  children,
}: TabsProps & {
  children?: ReactNode;
  onModelValueChange?: (value: string | number) => void;
}) {
  const [active, setActive] = useState(modelValue);
  useEffect(() => setActive(modelValue), [modelValue]);
  const select = (value: string | number) => {
    setActive(value);
    onModelValueChange?.(value);
  };
  return (
    <TabsContext.Provider value={{ active, select }}>
      <div className="tabs">
        <div className="tabs-list" role="tablist">
          {children}
        </div>
      </div>
    </TabsContext.Provider>
  );
}
export function useTabs() {
  return useContext(TabsContext);
}
