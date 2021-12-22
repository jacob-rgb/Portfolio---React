import { ReactElement } from "react"

interface Props {
    work: string,
    showIf: string,
    title: string,
    date: string,
    children: ReactElement | ReactElement[]
}

export const SingleWork = ({work, showIf, title, date, children}: Props) => {
    return (
        <div>
            {
                    work === showIf && (
                        <div className='work' aria-label='work1'>
                            <h3> { title } <small> ({ date }) </small></h3>
                            { children }
                       </div>
                    )
                }
        </div>
    )
}
