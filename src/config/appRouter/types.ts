interface IRoute {
  path: string;
  element: React.FC;
}
export type IRoutes = Array<IRoute>;
