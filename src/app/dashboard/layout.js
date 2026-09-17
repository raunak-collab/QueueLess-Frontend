import Aside from "@/components/layout/Aside";


export default function layout({ children }) {

    return (
        <>
            <Aside />
            {children}
        </>
    )
}
