import {ReactNode, Component, ErrorInfo, Suspense} from "react";
import {PageError} from "widgets/PageError";
import {PageLoader} from "widgets/PageLoader";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return <Suspense fallback={<PageLoader />}>
                <PageError />
            </Suspense>
        }

        return this.props.children;
    }
}
