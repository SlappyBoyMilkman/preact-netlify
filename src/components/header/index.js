import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
		<header>
			<div className = "wrap">
				<div className = "item">
					<div className = "header__lefthand-nav">
						<Link href="/work">Work</Link>
					</div>
					<nav className = "header__nav">
						<Link href="/blogs">Blogs</Link>
						<Link href="/contact">Contact me</Link>
					</nav>
				</div>
			</div>
		</header>
);

export default Header;
