function AuthLayout({ children }) {

  return (
    <div>
      <img src="https://picsum.photos/1200/720" alt="" />
      <main>
        { children }
      </main>
    </div>
  );
}

export default AuthLayout;
