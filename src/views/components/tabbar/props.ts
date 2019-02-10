export interface TabbarProps {
  children: Element[];
  unselectedTintColor?: string;
  tintColor?: string;
  style?: { height: string; fontSize: string };
  barTintColor?: string;
  selectedTab?: string;
  history: { push: any };
}
