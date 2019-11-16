import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
		<header>
			<div className = "wrap">
				<div className = "item">
					<div className = "header__lefthand-nav graphik-medium">
						<Link href="/work">Work</Link>
					</div>
					<nav className = "header__nav graphik-medium">
						<Link href="/about">About</Link>
						<Link href="/contact">Contact</Link>
					</nav>
				</div>
			</div>
		</header>
);

export default Header;
