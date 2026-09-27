"use client";

import { useState } from "react";
import {
  Bell,
  Building2,
  CalendarClock,
  Check,
  ChevronDown,
  Clock3,
  Globe2,
  KeyRound,
  Lock,
  Mail,
  Moon,
  MoreHorizontal,
  Palette,
  Phone,
  Save,
  ShieldCheck,
  Sun,
  Trash2,
  User,
  UserRound,
  Users,
} from "lucide-react";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("Profile");

  const [notifications, setNotifications] = useState({
    appointment: true,
    queue: true,
    reminders: true,
    email: false,
    weekly: true,
  });

  const [queueSettings, setQueueSettings] = useState({
    autoAssign: true,
    allowWalkIns: true,
    showEstimatedWait: true,
    soundAlerts: true,
  });

  const [workingHours, setWorkingHours] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: false,
  });

  const settingsSections = [
    {
      title: "Account",
      items: [
        {
          label: "Profile",
          icon: UserRound,
        },
        {
          label: "Clinic Information",
          icon: Building2,
        },
        {
          label: "Working Hours",
          icon: Clock3,
        },
      ],
    },
    {
      title: "Clinic",
      items: [
        {
          label: "Queue Settings",
          icon: Users,
        },
        {
          label: "Notifications",
          icon: Bell,
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          label: "Appearance",
          icon: Palette,
        },
        {
          label: "Security",
          icon: ShieldCheck,
        },
      ],
    },
  ];

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleQueueSetting = (key) => {
    setQueueSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleWorkingDay = (key) => {
    setWorkingHours((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] dark:bg-[#0B1120] dark:text-white">
      <div className="lg:pl-64">
        <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* Header */}
          <div className="mb-8">

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Settings
            </h1>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Manage your account, clinic preferences and QueueLess settings.
            </p>
          </div>

          {/* Main Settings Layout */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
            {/* Settings Sidebar */}
            <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-[#111827]">
              {settingsSections.map((section) => (
                <div key={section.title} className="mb-5 last:mb-0">
                  <p className="px-3 pb-2 pt-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {section.title}
                  </p>

                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      const active = activeSection === item.label;

                      return (
                        <button
                          key={item.label}
                          onClick={() => setActiveSection(item.label)}
                          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                            active
                              ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                              : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                          }`}
                        >
                          <Icon className="h-4 w-4 shrink-0" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Danger */}
              <div className="mt-5 border-t border-slate-200 pt-4 dark:border-slate-800">
                <button
                  onClick={() => setActiveSection("Danger Zone")}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                    activeSection === "Danger Zone"
                      ? "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"
                      : "text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10"
                  }`}
                >
                  <Trash2 className="h-4 w-4" />
                  Danger Zone
                </button>
              </div>
            </aside>

            {/* Settings Content */}
            <div className="min-w-0">
              {/* Profile */}
              {activeSection === "Profile" && (
                <ProfileSection />
              )}

              {/* Clinic Information */}
              {activeSection === "Clinic Information" && (
                <ClinicInformationSection />
              )}

              {/* Working Hours */}
              {activeSection === "Working Hours" && (
                <WorkingHoursSection
                  workingHours={workingHours}
                  toggleWorkingDay={toggleWorkingDay}
                />
              )}

              {/* Queue Settings */}
              {activeSection === "Queue Settings" && (
                <QueueSettingsSection
                  queueSettings={queueSettings}
                  toggleQueueSetting={toggleQueueSetting}
                />
              )}

              {/* Notifications */}
              {activeSection === "Notifications" && (
                <NotificationsSection
                  notifications={notifications}
                  toggleNotification={toggleNotification}
                />
              )}

              {/* Appearance */}
              {activeSection === "Appearance" && <AppearanceSection />}

              {/* Security */}
              {activeSection === "Security" && <SecuritySection />}

              {/* Danger */}
              {activeSection === "Danger Zone" && <DangerZoneSection />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* =========================================================
   PROFILE
========================================================= */

function ProfileSection() {
  return (
    <SettingsCard
      title="Profile Information"
      description="Update your personal information and account details."
    >
      <div className="mb-7 flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-center dark:border-slate-800">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-2xl font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
          RA
        </div>

        <div>
          <h3 className="font-semibold">Raunak Raza</h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Clinic Owner
          </p>

          <button className="mt-3 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
            Change profile photo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <InputField
          label="First Name"
          value="Raunak"
          icon={User}
        />

        <InputField
          label="Last Name"
          value="Raza"
          icon={User}
        />

        <InputField
          label="Email Address"
          value="raunak@example.com"
          icon={Mail}
          type="email"
        />

        <InputField
          label="Phone Number"
          value="+91 98765 43210"
          icon={Phone}
        />

        <InputField
          label="Role"
          value="Clinic Owner"
          icon={ShieldCheck}
          disabled
        />

        <InputField
          label="Timezone"
          value="Asia/Kolkata"
          icon={Globe2}
          disabled
        />
      </div>

      <SaveButton />
    </SettingsCard>
  );
}

/* =========================================================
   CLINIC INFORMATION
========================================================= */

function ClinicInformationSection() {
  return (
    <SettingsCard
      title="Clinic Information"
      description="Manage your clinic's basic information and contact details."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <InputField
          label="Clinic Name"
          value="MediCare Health Center"
          icon={Building2}
        />

        <InputField
          label="Clinic Phone"
          value="+91 11 4567 8900"
          icon={Phone}
        />

        <InputField
          label="Clinic Email"
          value="contact@medicare.example"
          icon={Mail}
        />

        <InputField
          label="Website"
          value="https://medicare.example"
          icon={Globe2}
        />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium">
          Clinic Address
        </label>

        <textarea
          rows={4}
          defaultValue="123 Healthcare Avenue, New Delhi, Delhi 110001"
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-[#0B1120] dark:text-white"
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <SelectField
          label="Country"
          value="India"
          options={["India", "United States", "United Kingdom"]}
        />

        <SelectField
          label="State"
          value="Delhi"
          options={["Delhi", "Maharashtra", "Karnataka"]}
        />

        <InputField label="Postal Code" value="110001" />
      </div>

      <SaveButton />
    </SettingsCard>
  );
}

/* =========================================================
   WORKING HOURS
========================================================= */

function WorkingHoursSection({ workingHours, toggleWorkingDay }) {
  const days = [
    ["monday", "Monday"],
    ["tuesday", "Tuesday"],
    ["wednesday", "Wednesday"],
    ["thursday", "Thursday"],
    ["friday", "Friday"],
    ["saturday", "Saturday"],
    ["sunday", "Sunday"],
  ];

  return (
    <SettingsCard
      title="Working Hours"
      description="Set your clinic's operating schedule."
    >
      <div className="mb-5 rounded-xl border border-indigo-100 bg-indigo-50 p-4 dark:border-indigo-500/10 dark:bg-indigo-500/5">
        <div className="flex gap-3">
          <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600 dark:text-indigo-400" />

          <div>
            <p className="text-sm font-semibold">
              Clinic operating schedule
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Patients will only be able to join queues during your active
              working hours.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {days.map(([key, label]) => {
          const enabled = workingHours[key];

          return (
            <div
              key={key}
              className="flex flex-col gap-4 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center dark:border-slate-800"
            >
              <div className="flex min-w-37.5 items-center gap-3">
                <Toggle
                  enabled={enabled}
                  onClick={() => toggleWorkingDay(key)}
                />

                <span className="text-sm font-medium">{label}</span>
              </div>

              {enabled ? (
                <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
                  <TimeInput value="09:00" />
                  <span className="hidden text-xs text-slate-400 sm:block">
                    to
                  </span>
                  <TimeInput value="18:00" />

                  {key === "saturday" && (
                    <span className="text-xs text-slate-400">
                      Reduced hours
                    </span>
                  )}
                </div>
              ) : (
                <span className="text-sm text-slate-400">
                  Clinic closed
                </span>
              )}
            </div>
          );
        })}
      </div>

      <SaveButton />
    </SettingsCard>
  );
}

/* =========================================================
   QUEUE SETTINGS
========================================================= */

function QueueSettingsSection({
  queueSettings,
  toggleQueueSetting,
}) {
  const settings = [
    {
      key: "autoAssign",
      title: "Auto-assign patients",
      description:
        "Automatically assign the next patient to an available doctor.",
    },
    {
      key: "allowWalkIns",
      title: "Allow walk-in patients",
      description:
        "Allow patients without an appointment to join the queue.",
    },
    {
      key: "showEstimatedWait",
      title: "Show estimated wait time",
      description:
        "Display estimated waiting time to patients in the queue.",
    },
    {
      key: "soundAlerts",
      title: "Queue sound alerts",
      description:
        "Play a notification sound when the next patient is called.",
    },
  ];

  return (
    <SettingsCard
      title="Queue Settings"
      description="Configure how your clinic queue operates."
    >
      <div className="space-y-1">
        {settings.map((setting) => (
          <SettingRow
            key={setting.key}
            title={setting.title}
            description={setting.description}
            enabled={queueSettings[setting.key]}
            onClick={() => toggleQueueSetting(setting.key)}
          />
        ))}
      </div>

      <div className="mt-7 border-t border-slate-200 pt-7 dark:border-slate-800">
        <h3 className="font-semibold">Queue Defaults</h3>

        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Default values used when creating a new queue.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <SelectField
            label="Default Queue Type"
            value="General Consultation"
            options={[
              "General Consultation",
              "Emergency",
              "Follow-up",
              "Specialist",
            ]}
          />

          <SelectField
            label="Maximum Queue Size"
            value="50 patients"
            options={[
              "25 patients",
              "50 patients",
              "75 patients",
              "100 patients",
            ]}
          />
        </div>
      </div>

      <SaveButton />
    </SettingsCard>
  );
}

/* =========================================================
   NOTIFICATIONS
========================================================= */

function NotificationsSection({
  notifications,
  toggleNotification,
}) {
  const settings = [
    {
      key: "appointment",
      title: "Appointment updates",
      description:
        "Receive notifications when appointments are created, changed or cancelled.",
    },
    {
      key: "queue",
      title: "Queue activity",
      description:
        "Get notified about important queue events and patient movement.",
    },
    {
      key: "reminders",
      title: "Patient reminders",
      description:
        "Receive reminders about upcoming appointments and pending patients.",
    },
    {
      key: "email",
      title: "Email notifications",
      description:
        "Receive important QueueLess updates and alerts through email.",
    },
    {
      key: "weekly",
      title: "Weekly reports",
      description:
        "Receive a weekly summary of your clinic's performance.",
    },
  ];

  return (
    <SettingsCard
      title="Notifications"
      description="Choose which notifications you want to receive."
    >
      <div className="space-y-1">
        {settings.map((setting) => (
          <SettingRow
            key={setting.key}
            title={setting.title}
            description={setting.description}
            enabled={notifications[setting.key]}
            onClick={() => toggleNotification(setting.key)}
          />
        ))}
      </div>

      <div className="mt-7 rounded-xl border border-slate-200 p-4 dark:border-slate-800">
        <div className="flex items-start gap-3">
          <Bell className="mt-0.5 h-5 w-5 text-indigo-500" />

          <div>
            <p className="text-sm font-semibold">Notification preferences</p>

            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              You can change these preferences at any time. Critical security
              notifications will always be sent.
            </p>
          </div>
        </div>
      </div>

      <SaveButton />
    </SettingsCard>
  );
}

/* =========================================================
   APPEARANCE
========================================================= */

function AppearanceSection() {
  const [selectedTheme, setSelectedTheme] = useState("System");

  const themes = [
    {
      name: "Light",
      icon: Sun,
      description: "Use the light theme",
    },
    {
      name: "Dark",
      icon: Moon,
      description: "Use the dark theme",
    },
    {
      name: "System",
      icon: Palette,
      description: "Follow your device settings",
    },
  ];

  return (
    <SettingsCard
      title="Appearance"
      description="Customize how QueueLess looks on your device."
    >
      <h3 className="mb-4 font-semibold">Theme</h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {themes.map((theme) => {
          const Icon = theme.icon;
          const active = selectedTheme === theme.name;

          return (
            <button
              key={theme.name}
              onClick={() => setSelectedTheme(theme.name)}
              className={`relative rounded-2xl border p-5 text-left transition ${
                active
                  ? "border-indigo-500 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-500/10"
                  : "border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700"
              }`}
            >
              {active && (
                <div className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <Check className="h-3 w-3" />
                </div>
              )}

              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${
                  active
                    ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400"
                    : "bg-slate-100 text-slate-500 dark:bg-slate-800"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <p className="text-sm font-semibold">{theme.name}</p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {theme.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className="mt-7 border-t border-slate-200 pt-7 dark:border-slate-800">
        <h3 className="font-semibold">Language & Region</h3>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <SelectField
            label="Language"
            value="English"
            options={["English", "Hindi"]}
          />

          <SelectField
            label="Date Format"
            value="DD/MM/YYYY"
            options={["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"]}
          />
        </div>
      </div>

      <SaveButton />
    </SettingsCard>
  );
}

/* =========================================================
   SECURITY
========================================================= */

function SecuritySection() {
  return (
    <SettingsCard
      title="Security"
      description="Manage your password and account security."
    >
      <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <KeyRound className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-semibold">Password</p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Last changed 24 days ago
              </p>
            </div>
          </div>

          <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
            Change password
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 p-4 dark:border-slate-800">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            <ShieldCheck className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm font-semibold">
              Account security status
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <span className="text-xs text-emerald-600 dark:text-emerald-400">
                Your account is secure
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 border-t border-slate-200 pt-7 dark:border-slate-800">
        <h3 className="font-semibold">Active Sessions</h3>

        <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 p-4 dark:border-slate-800">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
              <Lock className="h-5 w-5 text-slate-500" />
            </div>

            <div>
              <p className="text-sm font-semibold">Windows · Chrome</p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                New Delhi · Current session
              </p>
            </div>
          </div>

          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            Active
          </span>
        </div>
      </div>
    </SettingsCard>
  );
}

/* =========================================================
   DANGER ZONE
========================================================= */

function DangerZoneSection() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-rose-200 bg-white shadow-sm dark:border-rose-500/20 dark:bg-[#111827]">
        <div className="border-b border-rose-100 p-5 dark:border-rose-500/10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400">
              <Trash2 className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-semibold text-rose-600 dark:text-rose-400">
                Danger Zone
              </h2>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                These actions can permanently affect your clinic data.
              </p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <DangerRow
            title="Deactivate clinic"
            description="Temporarily disable your clinic and prevent new patients from joining queues."
            button="Deactivate Clinic"
          />

          <DangerRow
            title="Delete all clinic data"
            description="Permanently remove patients, appointments, queues and clinic records."
            button="Delete Data"
          />

          <DangerRow
            title="Delete account"
            description="Permanently delete your QueueLess account and associated clinic."
            button="Delete Account"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-500/20 dark:bg-amber-500/5">
        <div className="flex gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />

          <div>
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
              Before deleting your account
            </p>

            <p className="mt-1 text-xs leading-5 text-amber-700/80 dark:text-amber-400/80">
              Make sure you have exported any important clinic information
              before performing a permanent deletion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function SettingsCard({ title, description, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#111827]">
      <div className="border-b border-slate-200 p-5 sm:p-6 dark:border-slate-800">
        <h2 className="text-lg font-semibold">{title}</h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

      <div className="p-5 sm:p-6">{children}</div>
    </section>
  );
}

function InputField({
  label,
  value,
  icon: Icon,
  type = "text",
  disabled = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        )}

        <input
          type={type}
          defaultValue={value}
          disabled={disabled}
          className={`h-11 w-full rounded-xl border border-slate-200 bg-white text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-[#0B1120] dark:text-white ${
            Icon ? "pl-10 pr-4" : "px-4"
          } ${
            disabled
              ? "cursor-not-allowed bg-slate-50 text-slate-400 dark:bg-slate-900 dark:text-slate-500"
              : ""
          }`}
        />
      </div>
    </div>
  );
}

function SelectField({ label, value, options }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>

      <div className="relative">
        <select
          defaultValue={value}
          className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-[#0B1120] dark:text-white"
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  );
}

function TimeInput({ value }) {
  return (
    <div className="relative flex-1">
      <Clock3 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

      <input
        type="time"
        defaultValue={value}
        className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-[#0B1120] dark:text-white"
      />
    </div>
  );
}

function Toggle({ enabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
        enabled
          ? "bg-[#6366F1] dark:bg-[#818CF8]"
          : "bg-slate-300 dark:bg-slate-700"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
          enabled ? "left-6" : "left-1"
        }`}
      />
    </button>
  );
}

function SettingRow({
  title,
  description,
  enabled,
  onClick,
}) {
  return (
    <div className="flex items-center justify-between gap-5 rounded-xl px-1 py-4">
      <div>
        <p className="text-sm font-medium">{title}</p>

        <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

      <Toggle enabled={enabled} onClick={onClick} />
    </div>
  );
}

function SaveButton() {
  return (
    <div className="mt-8 flex justify-end border-t border-slate-200 pt-5 dark:border-slate-800">
      <button className="flex h-10 items-center gap-2 rounded-xl bg-[#6366F1] px-4 text-sm font-semibold text-white transition hover:bg-[#5558E8] dark:bg-[#818CF8] dark:text-[#0B1120] dark:hover:bg-[#9295FF]">
        <Save className="h-4 w-4" />
        Save Changes
      </button>
    </div>
  );
}

function DangerRow({ title, description, button }) {
  return (
    <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>

        <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

      <button className="shrink-0 rounded-lg border border-rose-200 px-3 py-2 text-xs font-semibold text-rose-600 transition hover:bg-rose-50 dark:border-rose-500/20 dark:text-rose-400 dark:hover:bg-rose-500/10">
        {button}
      </button>
    </div>
  );
}