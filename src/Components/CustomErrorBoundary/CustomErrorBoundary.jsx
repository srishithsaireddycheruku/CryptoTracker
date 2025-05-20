import {ErrorBoundary} from "react-error-boundary";

function CustonErrorBoundaryUI({error,resetErrorBoundary}) {
    return(
        <div role='alert' className="alert alert-error">
            <p>Something went wrong</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary} className="bg-blue-500 text-white px-4 py-2 rounded">Try again</button>
        </div> 
    );
}
export default function CustomErrorBoundary({ children }) {
    return (
        <ErrorBoundary
            FallbackComponent={CustonErrorBoundaryUI}
            onReset={() => window.location.reload()}
        >
            {children}
        </ErrorBoundary>
    );
}