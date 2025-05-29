import classNames from 'classnames/bind';
import styles from './Auth.module.scss';

import { Wrapper } from '../Popper';
import Button from '../Button';
import { UserAuth } from '../Store';

const cx = classNames.bind(styles);

function FormDelete() {
    const { setOpenFormDelete, dataForm } = UserAuth();

    const handleCloseForm = () => {
        setOpenFormDelete(false);
    };

    return (
        <div className={cx('form-wrapper')}>
            <section className={cx('section-content')}>
                <Wrapper className={cx('modal-form')}>
                    <h1 className={cx('title')}>{dataForm.title}</h1>
                    <div className={cx('container-btn')}>
                        <Button onClick={() => dataForm.handle()} className={cx('btn-form-delete')}>
                            Delete
                        </Button>
                        <Button onClick={handleCloseForm} className={cx('btn-form-delete')}>
                            Cancle
                        </Button>
                    </div>
                </Wrapper>
            </section>
        </div>
    );
}

export default FormDelete;
