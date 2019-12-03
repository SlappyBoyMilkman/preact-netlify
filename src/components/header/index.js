import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
		<header>
			<div className = "header__lefthand-nav">
				<div className = "wrap">
					<div className = "item">
						<div className = "graphik-regular">
							<Link href="/">Home</Link>
						</div>
					</div>
				</div>
			</div>
			<div className = "header__righthand-nav">
				<div className = "wrap">
					<div className = "item">
						<nav className = "header__nav graphik-regular">
							<Link href="/work">Work</Link>
							<Link href="/about">About</Link>
							<Link href="/contact">Contact</Link>
						</nav>
					</div>
				</div>
			</div>
		</header>
);

export default Header;
