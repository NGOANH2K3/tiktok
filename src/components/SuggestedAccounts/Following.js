import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { UserAuth } from '../Store/AuthContext';
import SuggestedAccounts from './SuggestedAccounts';
import configs from '@/services';

function FollowingAccounts({ headingTitle = '', footerTitle = '' }) {
    const { tokenStr } = UserAuth();

    const INIT_PAGE = 1;

    const [listFollowingSuggest, setListFollwingSuggest] = useState([]);
    const [numPages, setNumPages] = useState(INIT_PAGE);

    const handleSeeMoreFollowing = useCallback(() => {
        setNumPages((prev) => prev + 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numPages]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await configs.following(numPages, tokenStr);

            setListFollwingSuggest((prev) => [...prev, ...data]);
        };

        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numPages]);

    return (
        <SuggestedAccounts
            headingTitle={headingTitle}
            footerTitle={footerTitle}
            data={listFollowingSuggest}
            onClick={handleSeeMoreFollowing}
        />
    );
}

FollowingAccounts.propTypes = {
    headingTitle: PropTypes.string,
    footerTitle: PropTypes.string,
};

export default FollowingAccounts;
