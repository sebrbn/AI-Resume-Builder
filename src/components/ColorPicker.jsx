import { Palette, Check } from 'lucide-react';
import React ,{useState} from 'react'

const ColorPicker = ({selectorColor, onChange}) => {
    const colors = [
        {name: "Blue", value: "#3B82F6"},
        // FIX: Added the missing '#' prefix for Indigo
        {name: "Indigo", value: "#6366F1"}, 
        {name: "Purple", value: "#8B5CF6"},
        {name: "Green", value: "#10B981"},
        {name: "Red", value: "#EF4444"},
        {name: "Orange", value: "#F97316"},
        {name: "Teal", value: "#14B8A6"},
        {name: "Pink", value: "#EC4899"},
        {name: "Gray", value: "#6B7280"},
        {name: "Black", value: "#1F2937"},
    ]

    const [isOpen , setIsOpen] = useState(false);
  
    const handleColorChange = (colorValue) => {
        onChange(colorValue);
        setIsOpen(false); // Ensure the picker closes on selection
    }

    return (
        <div className='relative'> 
            <button onClick={()=> setIsOpen(!isOpen)} className='flex items-center gap-1 text-sm text-purple-600 bg-purple-100 ring-purple-300 hover:ring transition-all px-3 py-2 rounded-lg'>
                <Palette size={16} /> <span className='max-sm:hidden'>Accent</span>
            </button>
            {isOpen &&(
                // Positioned dropdown to be centered below the button
                <div className='grid grid-cols-4 w-60 gap-2 absolute top-full left-1/2 -translate-x-1/2 p-3 mt-2 z-10 bg-white rounded-md border border-gray-200 shadow-lg'>
                    {colors.map((color)=>(
                        // Removed 'realtive' typo and fixed structure
                        <div key={color.value} className='cursor-pointer group flex flex-col items-center' onClick={()=> handleColorChange(color.value)}>
                            {/* Color Swatch: Added flex for centering and dynamic border */}
                            <div className={`w-12 h-12 rounded-full border-2 transition-colors flex items-center justify-center ${
                                selectorColor === color.value 
                                    ? 'border-gray-800' 
                                    : 'border-transparent group-hover:border-black/25'
                            }`} 
                            style={{backgroundColor : color.value}}>

                                {selectorColor === color.value &&(
                                    // FIX: Placed Check directly inside the swatch for simple centering
                                    <Check className="w-5 h-5 text-white drop-shadow-lg" />
                                )}
                            </div>
                            {/* Color Name */}
                            <p className='text-xs text-center mt-1 text-gray-600'>{color.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
  )
}

export default ColorPicker