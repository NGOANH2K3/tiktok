import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Auth.module.scss';

import { UserAuth } from '../Store';
import { CloseTabs } from '../Control';
import { Wrapper } from '../Popper';
import Button from '../Button';
import TextBox from '../TextBox';
import update from '@/services/UpdateUserCurrent';
import Image from '@/components/Image';

const cx = classNames.bind(styles);

function FormUpdate() {
    const { userAuth, tokenStr, setOpenFormEdit } = UserAuth();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [website, setWebsite] = useState('');
    const [bio, setBio] = useState('');
    const [avatar, setAvatar] = useState(null); // ✅ ảnh mới
    const [previewAvatar, setPreviewAvatar] = useState(null); // ✅ ảnh xem trước
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if (!userAuth) return;
        setFirstName(userAuth.first_name ?? '');
        setLastName(userAuth.last_name ?? '');
        setWebsite(userAuth.website_url ?? '');
        setBio(userAuth.bio ?? '');
        setPreviewAvatar(userAuth.avatar); // ✅ gán ảnh ban đầu
    }, [userAuth]);
    const isValidURL = (url) => {
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    };
    const handleSave = async () => {
        if (website && !isValidURL(website)) {
            alert('Please enter a valid website URL (e.g. https://example.com)');
            return;
        }
        const payload = {
            first_name: firstName,
            last_name: lastName,
            website_url: website,
            bio: bio,
            ...(avatar && { avatar }), // chỉ thêm nếu có ảnh mới
        };

        await update(tokenStr, payload); // truyền object, không phải FormData

        setLoaded(true);
        console.log('result update profile: ', payload);
    };

    const noChange =
        firstName === (userAuth?.first_name ?? '') &&
        lastName === (userAuth?.last_name ?? '') &&
        website === (userAuth?.website_url ?? '') &&
        bio === (userAuth?.bio ?? '') &&
        !avatar; // ✅ nếu có thay avatar thì cũng là thay đổi

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatar(file);
            setPreviewAvatar(URL.createObjectURL(file));
        }
    };

    return (
        <div className={cx('form-wrapper')}>
            {loaded && <span className={cx('notify')}>Update Profile Success</span>}
            <section className={cx('modal-update')}>
                <Wrapper className={cx('main')}>
                    <header className={cx('header-update')}>
                        <h1 className={cx('header-title')}>Edit profile</h1>
                        <div>
                            <CloseTabs className={cx('close')} onClick={() => setOpenFormEdit(false)} />
                        </div>
                    </header>

                    <div className={cx('modal-content')}>
                        {/* Avatar */}
                        <div className={cx('items-container')}>
                            <div className={cx('items-title')}>
                                <h4>Profile photo</h4>
                            </div>
                            <div className={cx('update-content')}>
                                <div className={cx('avatar-preview')}>
                                    {previewAvatar && <Image src={previewAvatar} alt="Avatar preview" />}
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAvatarChange}
                                    className={cx('input-avatar')}
                                />
                            </div>
                        </div>

                        {/* First Name */}
                        <FormRow
                            label="First name"
                            value={firstName}
                            onChange={setFirstName}
                            placeholder="First name"
                        />

                        {/* Last Name */}
                        <FormRow label="Last name" value={lastName} onChange={setLastName} placeholder="Last name" />

                        {/* Website */}
                        <FormRow
                            label="Website URL"
                            value={website}
                            onChange={setWebsite}
                            placeholder="https://example.com"
                        />

                        {/* Bio */}
                        <FormRow
                            label="Bio"
                            value={bio}
                            onChange={setBio}
                            placeholder="Tell something about you"
                            textarea
                            maxLength={80}
                            desc={`Up to 80 characters • ${bio.length}/80`}
                        />
                    </div>

                    <footer className={cx('footer-update')}>
                        <Button onClick={() => setOpenFormEdit(false)} outline medium>
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSave}
                            disabled={noChange}
                            outline
                            medium
                            className={cx('btn-form-update', { 'btn-form-save': true })}
                        >
                            Save
                        </Button>
                    </footer>
                </Wrapper>
            </section>
        </div>
    );
}

function FormRow({ label, value, onChange, placeholder, textarea = false, maxLength, desc }) {
    return (
        <div className={cx('items-container')}>
            <div className={cx('items-title')}>
                <h4>{label}</h4>
            </div>
            <div className={cx('update-content')}>
                {textarea ? (
                    <TextBox
                        value={value}
                        onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
                        placeholder={placeholder}
                    />
                ) : (
                    <input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        type="text"
                        placeholder={placeholder}
                        spellCheck
                    />
                )}
                {desc && <p className={cx('des-policy')}>{desc}</p>}
            </div>
        </div>
    );
}

export default FormUpdate;
