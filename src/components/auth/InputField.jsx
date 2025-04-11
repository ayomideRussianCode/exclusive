

export default function InputField ({label, type = "text"}) {
    return (
        <div>
            <input type={type} placeholder={label}  className="w-full border-b border-gray-300 py-2 outline-none placeholder-gray-400" />
        </div>
    )
}