import { FC, useEffect, useState } from "react";

type Option = {
    label: string;
    value: string;
}

export const Form: FC = () => {

    const [options, setOptions] = useState<Option[]>([
        // {label: 'Option1', value: 'option-1'},
        // {label: 'Option2', value: 'option-2'},
        // {label: 'Option3', value: 'option-3'},
    ]);

    useEffect(() => {
        fetch('/api/options')
            .then((response) => response.json())
            .then((data) => {
                setOptions(data);
            });
    });

    return(
        <form>
            <div style={{marginBottom: '1rem'}}>
                <select>
                    {/* <option>Option1</option>
                    <option>Option2</option>
                    <option>Option3</option> */}
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
};
