const PaginationButton = ({ text, disabled, handleClick }: { text: string; disabled: boolean; handleClick: () => void }) => {
    return (
        <button
            className="h-12 w-20 bg-blue-800 text-white font-semibold rounded-md flex justify-center items-center disabled:bg-blue-200"
            onClick={handleClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default PaginationButton;