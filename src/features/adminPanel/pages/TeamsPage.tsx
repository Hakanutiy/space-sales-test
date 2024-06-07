import { Layout } from "@/components/Elements/Layout/Layout";
import { Button } from "@/components/Elements/ui/Button";
import { SearchIcon } from "@/assets/icons";
import { TeamList } from "@/features/adminPanel/components/TeamList";
import { MainModal } from "@/components/Elements/Modal";
import { CreateUserTeam } from "@/features/adminPanel/components/CreateUserTeam";
import { useUiStore } from "@/stores/ui";
import { useGetTeams } from "@/features/adminPanel/api/getTeamUsers";
import { Input } from "@/components/Elements/ui/Input";
import { useState, useEffect } from "react";
import {SideBar} from "@/features/adminPanel/components/SideBar";

export const TeamsPage = () => {
    const { data } = useGetTeams({ config: {} });
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const { setCurrentModal } = useUiStore();

    useEffect(() => {
        if (data) {
            const filtered = data.filter(user =>
                user.email.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredData(filtered);
        }
    }, [search, data]);

    return (
        <Layout
            sidebarContent={<SideBar />}
            title={"Команда"}
            headerContent={
                <>
                    <div className="relative max-w-2xl w-full">
                        <Input
                            placeholder="Поиск по Email"
                            type="small"
                            value={search}
                            onChange={setSearch}
                        />
                        <button className="absolute right-3 top-2">
                            <SearchIcon />
                        </button>
                    </div>
                    <div className=" md:w-fit w-full">
                        <Button onClick={() => setCurrentModal('createTeams')} type="success">
                            Добавить пользователя
                        </Button>
                    </div>

                </>
            }>
            <div className="w-full flex justify-center">
                <section className="bg-foreGround py-4 max-w-6xl rounded-2xl w-full">

                    <main className="md:px-7 flex flex-col gap-10 pt-5">

                        <TeamList data={filteredData} />
                    </main>
                    <MainModal modalId="createTeams">
                        <CreateUserTeam />
                    </MainModal>
                </section>
            </div>
        </Layout>
    );
};
