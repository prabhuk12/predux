import BookablesList from "./BookablesList";

export default function BookablesPage () {
    console.log("loaded this");
    return (
      <main className="bookables-page">
        <BookablesList/>
      </main>
    );
  }