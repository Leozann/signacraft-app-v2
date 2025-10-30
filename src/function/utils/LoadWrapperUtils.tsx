import { Suspense, ComponentType, LazyExoticComponent} from "react";

function LoadWrapperUtils<P extends object>(
  Component: LazyExoticComponent<ComponentType<P>>
): React.FC<P> {
  return function WrappedComponent(props: P) {
    return (
      <Suspense fallback={null}>
        <Component {...props} />
      </Suspense>
    );
  };
}

export default LoadWrapperUtils;