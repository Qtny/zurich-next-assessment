/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import AuthGuard from "@/components/AuthGuard";
import Footer from "@/components/Footer";
import Headers from "@/components/Headers";
import PaginationButton from "@/components/PaginationButton";
import UsersTable from "@/components/UsersTable";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { RootState } from "@/lib/store/store";
import { fetchUsers } from "@/lib/store/userThunks";
import { useEffect, useState } from "react";

const UsersPage = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state: RootState) => state.users.loading);
    const users = useAppSelector((state: RootState) => state.users.users);
    const totalPages = useAppSelector((state: RootState) => state.users.totalPages);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        dispatch(fetchUsers(page))
    }, [])

    useEffect(() => {
        dispatch(fetchUsers(page))
    }, [page])

    const handleNext = () => {
        setPage((prev) => prev + 1);
    }

    const handlePrev = () => {
        setPage((prev) => prev - 1);
    }

    return (
        <AuthGuard>
            <div className="w-screen flex flex-col justify-start items-center">
                <Headers />

                {/* table */}
                <div className="w-full min-w-[900px] max-w-[1024px] h-[520px] space-y-4">
                    <h1 className="text-3xl font-semibold text-blue-900">List of users</h1>
                    {isLoading ? <p>Loading...</p> : <UsersTable users={users} />}
                </div>

                {/* pagination */}
                <div className="flex mt-10 gap-8 justify-center items-center">
                    {/* back button */}
                    <PaginationButton text="Prev" handleClick={handlePrev} disabled={page === 1} />

                    {/*  */}
                    <h4 className="text-xl">{page} / {totalPages}</h4>
                    {/* next button */}
                    <PaginationButton text="Next" handleClick={handleNext} disabled={page === totalPages} />
                </div>

                <Footer />
            </div>
        </AuthGuard>
    )
}

export default UsersPage;