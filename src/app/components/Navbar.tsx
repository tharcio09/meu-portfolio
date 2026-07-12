import { NavbarClient } from './NavbarClient';

// Server Component — sem bundle JS no cliente.
// Toda a lógica interativa (scroll, active section, theme) fica no NavbarClient.
export default function Navbar() {
  return <NavbarClient />;
}
