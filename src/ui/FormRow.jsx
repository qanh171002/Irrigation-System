function FormRow({label, error, children}) {
    return (
        <div className="flex flex-col gap-2 py-3">
            {label && <label htmlFor={children.props.id} className="font-medium text-sm text-gray-700">{label}</label>}
            {children}
            {error && <span className="text-sm text-red-600">{error}</span>}
        </div>
    )
}

export default FormRow
