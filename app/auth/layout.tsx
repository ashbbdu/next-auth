const AuthLayout = ({children} :{children :  React.ReactNode}) => {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-500 to-blue-500">
            {children}
        </div>
    )
}

//layouts must be exported by default
export default AuthLayout;