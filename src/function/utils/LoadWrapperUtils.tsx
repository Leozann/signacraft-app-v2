import { Suspense } from "react";

function LoadWrapperUtils(Component: React.LazyExoticComponent<any>) {
    return (props: any) => (
        <Suspense fallback={null}>
            <Component {...props} />
        </Suspense>
    );
}

export default LoadWrapperUtils;