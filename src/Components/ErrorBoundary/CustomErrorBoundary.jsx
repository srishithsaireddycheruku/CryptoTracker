import {ErrorBoundary} from 'react-error-boundary';

function CustomErrorBoundaryUI({ error , resetErrorBoundary}){
    return(
        <div className="h-{100vh} flex justify-center items-center padding-5">
            <div role='alert' className="bg-red-500 text-white p-5 rounded-lg flex flex-col items-center gap-5">
                <p>Something Went Wrong</p>
                <pre>{error.message}</pre>
                <button onClick={resetErrorBoundary}>Try Again</button>
            </div>
        </div>
    )
}

export default function CustomErrorBoundary({ children }){
    return(
        <ErrorBoundary 
        FallbackComponent={CustomErrorBoundaryUI}
        onReset={()=> window.location.reload()}
        >
            {children}
        </ErrorBoundary>
    )
}