import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { UserAuth } from '../Store';
import suggest from '@/services/accountSuggestService';
import SuggestedAccounts from './SuggestedAccounts';

function Suggest({ headingTitle = '', footerTitle = '' }) {
    const INIT_PAGE = 1;
    const PER_PAGE = 5;

    const { tokenStr } = UserAuth();

    const [listAccountSuggested, setListAccountSuggest] = useState([]);
    const [numPages, setNumPages] = useState(INIT_PAGE);

    const handleSeeMoreAccounts = useCallback(() => {
        setNumPages((prev) => prev + 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numPages]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await suggest(numPages, PER_PAGE, tokenStr);

            setListAccountSuggest((prev) => [...prev, ...data]);
        };

        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numPages]);

    return (
        <SuggestedAccounts
            headingTitle={headingTitle}
            footerTitle={footerTitle}
            data={listAccountSuggested}
            onClick={handleSeeMoreAccounts}
            isPreview
        />
    );
}

Suggest.propTypes = {
    headingTitle: PropTypes.string,
    footerTitle: PropTypes.string,
};

export default Suggest;
