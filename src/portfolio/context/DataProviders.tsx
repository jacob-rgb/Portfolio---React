import { createContext, useEffect, useState } from "react";


export const DataContext = createContext({})

export const DataProvider = (props:any) => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [language, setLanguage] = useState< 'en' | 'es'>('en');

    const value = {
        theme: [theme, setTheme],
        language:[language, setLanguage]
    }

    useEffect(() => {
        const themeLS:any = localStorage.getItem('theme');
        if(themeLS) setTheme(themeLS);
    }, [])

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}