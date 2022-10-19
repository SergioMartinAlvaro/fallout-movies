import { Head } from "@/components/Head";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/app');
    }

    return (
        <>
            <Head description="Welcome to bulletproof react" />
            <main className="landing">
                <section className="landing__container">
                    <h1 className="landing__title"> Welcome</h1>
                </section>
            </main>
        </>
    )
}