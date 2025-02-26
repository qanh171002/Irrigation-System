function LoginLayout({children}) {
    return (
        <main className="grid min-h-screen grid-cols-[48rem] gap-[3.2rem] place-content-center bg-gray-100">
            {children}
        </main>
    )
}

export default LoginLayout
