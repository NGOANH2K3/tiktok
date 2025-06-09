import ActionsApp from '@/components/AcctionApp';
import ViewVideo from '@/components/ViewVideo';

function Home() {
    const CATEGORIES = 'for-you';

    return (
        <div
            style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '300px',
            }}
        >
            <ViewVideo type={CATEGORIES} />
            <ActionsApp />
        </div>
    );
}

export default Home;
