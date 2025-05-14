import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
const cx = classNames.bind(styles);
function AccoutItem() {
    return (
        <div className={cx('account')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0149735feee782f4e921fb10c199001c~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=f844b90e&x-expires=1747274400&x-signature=ICOglPrEnXfxQUmhqRKTqV3D%2FgY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Giang</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}> HuuGiang123 </span>
            </div>
        </div>
    );
}

export default AccoutItem;
