import Header from '@/layouts/components/Header';
import Sidebar from '@/layouts/components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { UserAuth } from '@/components/Store';
import { useEffect } from 'react';
import AuthForm from '@/components/Auth';
import FullScreen from '../FullScrean';
import Formlogin from '@/components/Auth/login';
import FormLogOut from '@/components/Auth/logout';
import DiscardForm from '@/components/Auth/DiscardForm';
import Notify from '@/components/Notify';
import FormUpdate from '@/components/Auth/updateForm';
import FormDelete from '@/components/Auth/deleteForm';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const { openFormLogin, openFormLogout, openFormEdit, openFullVideo, openFormDelete, openFormDiscard } = UserAuth();

    useEffect(() => {
        document.body.style =
            openFormLogin || openFormLogout || openFormEdit || openFullVideo || openFormDelete || openFormDiscard
                ? 'overflow-y: hidden'
                : 'overflow-y: overlay';
    }, [openFormLogin, openFormLogout, openFormEdit, openFullVideo, openFormDelete, openFormDiscard]);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            {(openFormLogin || openFormLogout || openFormEdit || openFormDelete || openFormDiscard) && (
                <AuthForm>
                    {openFormLogin && <Formlogin />}
                    {openFormLogout && <FormLogOut />}
                    {openFormEdit && <FormUpdate />}
                    {openFormDelete && <FormDelete />}
                    {openFormDiscard && <DiscardForm />}
                </AuthForm>
            )}
            {openFullVideo && <FullScreen />}
            <Notify />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
