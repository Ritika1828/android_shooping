import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";
import { useQuery } from "@apollo/client";
import GET_MY_INFO from "../graphql-queries/queries/get-me.gql";

function Navbar() {
	const { loading, error, data } = useQuery(GET_MY_INFO, {
		ssr: true,
	});
	if (loading) return null;
	if (loading) console.log("loading = " + loading);
	if (error) console.log("error = " + error);
	if (data) {
		console.log(data);
		console.log(data.me.name);
	}
	return (
		<div>
			<div className={styles.container}>
				<img
					className={styles.img}
					src="https://gradeup-question-images.grdp.co/liveData/f/2022/7/bep_logo_53.svg"
					alt="byjus"
				/>
				<div className={styles.mainlink}>
                    <Link href='/'>
                        <a className={styles.link}>Home</a>
                        
                    </Link>

					<Link href="/free-videos">
						<a className={styles.link}>Free Videos</a>
					</Link>
                    <Link className={styles.link} href="/practice">
                        <a className={styles.link}>practice</a>
					</Link>
                    <Link className={styles.link} href="/test-series">
                        <a className={styles.link}>Test series</a>
					</Link>
                    <Link className={styles.link} href="doubts">
                        <a className={styles.link}>Doubts</a>
					</Link>
                    <Link className={styles.link} href="/classroom">
                        <a className={styles.link}>classroom</a>
					</Link>
					<Link className={styles.link} href="/profile">
						<div className={styles.profile}>
							<div>
								<div>{data.me.name}</div>
								<div>{data.me.primaryExamCategory.name}</div>
							</div>

							<div>
								<img className={styles.navimage} src={data.me.picture} />
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
