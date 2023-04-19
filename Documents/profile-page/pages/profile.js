import { useQuery } from '@apollo/client'
import Link from "next/link";
import {MdNavigateNext} from 'react-icons/md'
import GET_MY_INFO from "../graphql-queries/queries/get-me.gql";
import styles from '../styles/Profile.module.css'

const Profile = () => {
	const { loading, error, data } = useQuery(GET_MY_INFO, {
		ssr: true,
	});
	console.log({ loading });
	if (loading) return null;
	if (loading) console.log("loading = " + loading);
	if (error) console.log("error = " + error);
	if (data) {
		console.log(data);
		console.log(data.me.name);
	}

	return (
        <div>
            <div className={styles.nav}>
                <Link href="/">
                    <a className={styles.home}>Home</a>
                </Link>
                <MdNavigateNext />
                <span>{data.me.name}</span>
                <div>
                    <img src={data.me.picture} />
                    <h1>{data.me.name}</h1>
                    <button>Edit Profile</button>
                </div>
            </div>
		</div>
	);
};

export default Profile;
