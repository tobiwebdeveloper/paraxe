export interface SidebarProps {
  collapsed?: boolean;
}

export interface SidebarGroupProps {
  label?: string;
}

export interface SidebarItemProps {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  expanded?: boolean;
}