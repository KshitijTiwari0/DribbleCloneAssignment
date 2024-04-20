// At the top of your CreateProject component file
'use client';

import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/sessions";
import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";

const CreateProject = () => {
 const [session, setSession] = useState(null);

 useEffect(() => {
    const fetchSession = async () => {
      const userSession = await getCurrentUser();
      if (!userSession?.user) {
        redirect("/");
      } else {
        setSession(userSession);
      }
    };

    fetchSession();
 }, []);

 if (!session) {
    return null; // Or a loading indicator
 }

 return (
    <Modal>
      <h3 className="modal-head-text">Create a New Project</h3>
      <ProjectForm type="create" session={session} />
    </Modal>
 );
};

export default CreateProject;
