import { useRouter } from 'next/router';

const Goback = () => {
    const router = useRouter();

    return (
        <div
            onClick={() => {
                router.back();
            }}
            role="button"
        >
            <i className="bi bi-arrow-left"></i>
        </div>
    );
};

export default Goback;
