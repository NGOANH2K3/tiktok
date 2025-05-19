import Header from '@/layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="conten">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
