"use client";

import { useState } from "react";
import {
  Mail,
  Stethoscope,
  Users,
  Clock3,
  RotateCcw,
  X,
  CheckCircle2,
} from "lucide-react";

export default function InvitationPage() {
  const [role, setRole] = useState("Receptionist");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [invitations, setInvitations] = useState([
    {
      id: 1,
      email: "doctor@example.com",
      role: "Doctor",
      status: "Pending",
      date: "Sep 24, 2026",
    },
    {
      id: 2,
      email: "reception@example.com",
      role: "Receptionist",
      status: "Accepted",
      date: "Sep 23, 2026",
    },
  ]);

  const handleSendInvitation = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    const newInvitation = {
      id: Date.now(),
      email,
      role,
      status: "Pending",
      date: "Sep 24, 2026",
    };

    setInvitations((prev) => [newInvitation, ...prev]);

    setEmail("");
    setMessage("");
  };

  const handleCancel = (id) => {
    setInvitations((prev) =>
      prev.filter((invitation) => invitation.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] dark:bg-[#0B1120] dark:text-white">

      {/* Main Content */}
      <div className="lg:pl-64">

        <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

          {/* Header */}
          <div className="mb-8">

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Invite your team
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
              Invite doctors and receptionists to help manage your clinic,
              patients, and queues.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr]">

            {/* Invitation Form */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#111827]">

              <div className="mb-6">
                <h2 className="text-lg font-semibold">
                  Send an invitation
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Add a team member to your clinic.
                </p>
              </div>

              <form
                onSubmit={handleSendInvitation}
                className="space-y-5"
              >

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="member@example.com"
                      required
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#6366F1] focus:ring-4 focus:ring-[#6366F1]/10 dark:border-slate-700 dark:bg-[#0B1120] dark:placeholder:text-slate-500 dark:focus:border-[#818CF8] dark:focus:ring-[#818CF8]/10"
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Select role
                  </label>

                  <div className="grid grid-cols-2 gap-3">

                    {/* Doctor */}
                    <button
                      type="button"
                      onClick={() => setRole("Doctor")}
                      className={`rounded-xl border p-4 text-left transition ${role === "Doctor"
                          ? "border-[#6366F1] bg-[#6366F1]/5 ring-2 ring-[#6366F1]/10 dark:border-[#818CF8] dark:bg-[#818CF8]/5"
                          : "border-slate-200 bg-slate-50 hover:border-slate-300 dark:border-slate-700 dark:bg-[#0B1120] dark:hover:border-slate-600"
                        }`}
                    >
                      <Stethoscope
                        size={20}
                        className={
                          role === "Doctor"
                            ? "text-[#6366F1] dark:text-[#818CF8]"
                            : "text-slate-400"
                        }
                      />

                      <p className="mt-3 text-sm font-semibold">
                        Doctor
                      </p>

                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        Manage patients & queues
                      </p>
                    </button>

                    {/* Receptionist */}
                    <button
                      type="button"
                      onClick={() => setRole("Receptionist")}
                      className={`rounded-xl border p-4 text-left transition ${role === "Receptionist"
                          ? "border-[#6366F1] bg-[#6366F1]/5 ring-2 ring-[#6366F1]/10 dark:border-[#818CF8] dark:bg-[#818CF8]/5"
                          : "border-slate-200 bg-slate-50 hover:border-slate-300 dark:border-slate-700 dark:bg-[#0B1120] dark:hover:border-slate-600"
                        }`}
                    >
                      <Users
                        size={20}
                        className={
                          role === "Receptionist"
                            ? "text-[#6366F1] dark:text-[#818CF8]"
                            : "text-slate-400"
                        }
                      />

                      <p className="mt-3 text-sm font-semibold">
                        Receptionist
                      </p>

                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        Manage patients & tokens
                      </p>
                    </button>

                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Personal message

                    <span className="ml-1 text-xs font-normal text-slate-400">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Add a short message..."
                    rows={4}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#6366F1] focus:ring-4 focus:ring-[#6366F1]/10 dark:border-slate-700 dark:bg-[#0B1120] dark:placeholder:text-slate-500 dark:focus:border-[#818CF8] dark:focus:ring-[#818CF8]/10"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#6366F1] px-5 text-sm font-semibold text-white transition hover:bg-[#5558E8] active:scale-[0.99] dark:bg-[#818CF8] dark:text-[#0B1120] dark:hover:bg-[#9295FF]"
                >
                  <Mail size={17} />
                  Send Invitation
                </button>

              </form>
            </section>

            {/* Invitations */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#111827]">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-800">

                <div>
                  <h2 className="text-lg font-semibold">
                    Invitations
                  </h2>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Manage your team invitations
                  </p>
                </div>

                <div className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {invitations.filter(
                    (invitation) => invitation.status === "Pending"
                  ).length}{" "}
                  Pending
                </div>

              </div>

              {/* Invitation List */}
              <div className="divide-y divide-slate-200 dark:divide-slate-800">

                {invitations.map((invitation) => (
                  <div
                    key={invitation.id}
                    className="flex items-center justify-between gap-4 px-6 py-5"
                  >

                    {/* User Info */}
                    <div className="flex min-w-0 items-center gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6366F1]/10 text-sm font-bold text-[#6366F1] dark:bg-[#818CF8]/10 dark:text-[#818CF8]">
                        {invitation.email
                          .charAt(0)
                          .toUpperCase()}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold">
                          {invitation.email}
                        </p>

                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <span>{invitation.role}</span>

                          <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />

                          <span>{invitation.date}</span>
                        </div>
                      </div>

                    </div>

                    {/* Status + Actions */}
                    <div className="flex shrink-0 items-center gap-3">

                      {invitation.status === "Pending" ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                          <Clock3 size={13} />
                          Pending
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 size={13} />
                          Accepted
                        </span>
                      )}

                      {invitation.status === "Pending" && (
                        <div className="flex items-center gap-1">

                          <button
                            type="button"
                            title="Resend invitation"
                            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-[#6366F1] dark:hover:bg-slate-800 dark:hover:text-[#818CF8]"
                          >
                            <RotateCcw size={16} />
                          </button>

                          <button
                            type="button"
                            title="Cancel invitation"
                            onClick={() =>
                              handleCancel(invitation.id)
                            }
                            className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-500/10"
                          >
                            <X size={16} />
                          </button>

                        </div>
                      )}

                    </div>

                  </div>
                ))}

                {/* Empty State */}
                {invitations.length === 0 && (
                  <div className="px-6 py-16 text-center">

                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400 dark:bg-slate-800">
                      <Mail size={20} />
                    </div>

                    <p className="mt-4 text-sm font-medium">
                      No invitations yet
                    </p>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Send your first team invitation.
                    </p>

                  </div>
                )}

              </div>
            </section>

          </div>

          {/* Info Card */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 dark:border-indigo-500/10 dark:bg-indigo-500/5">

            <Mail
              size={18}
              className="mt-0.5 shrink-0 text-[#6366F1] dark:text-[#818CF8]"
            />

            <div>
              <p className="text-sm font-semibold">
                How invitations work
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Your team member will receive an invitation link by email.
                They can use it to create their account and join your clinic
                with the selected role.
              </p>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}