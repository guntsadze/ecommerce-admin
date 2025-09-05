declare module "recharts" {
  import { ComponentType } from "react";

  export interface ResponsiveContainerProps {
    width?: string | number;
    height?: string | number;
    children?: React.ReactNode;
    [key: string]: any;
  }

  export const ResponsiveContainer: ComponentType<ResponsiveContainerProps>;
  export const BarChart: ComponentType<any>;
  export const Bar: ComponentType<any>;
  export const XAxis: ComponentType<any>;
  export const YAxis: ComponentType<any>;
}
