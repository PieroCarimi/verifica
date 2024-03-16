import { AppContext } from "@/ContextProvider";
import { CheckedList } from "@/components/CheckedList";
import { useRouter } from "next/router";
import { useContext } from "react";

const Checked: React.FC = () => {
    const { posts, setPosts, selectedPosts, checkedList }: any = useContext(AppContext);
    const router = useRouter();
  
    const goToCheckedList = () => {
      router.push('/');
    };

    function removePost(id: any): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div>
          <nav>
            <button onClick={goToCheckedList}>Home</button>
          </nav>
          <main>
            <h1>Checked List</h1>
            <CheckedList />
          </main>
        </div>
    )
};

export default Checked;