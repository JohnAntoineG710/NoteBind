import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          header: {
            title: 'NoteBind!'
          },
          content: {
            sideBar: {
              addFolderButton: 'Add Folder',
              folderDialog: {
                title: {
                  new: 'New Folder',
                  edit: 'Edit Folder'
                },
                action: {
                  new: 'Add Folder',
                  edit: 'Edit'
                },
                inputLabel: 'Folder Name'
              }
            },
            note: {
              headerTag: 'Note',
              button: {
                edit: 'edit',
                delete: 'delete'
              },
              dialog: {
                label: {
                  add: 'New Note',
                  edit: 'Edit Note'
                },
                action : {
                  add: 'add',
                  edit: 'edit'
                },
                input: {
                  title: 'Title',
                  contentLabel: 'Content'
                },
                button: {cancel: 'cancel'}
              }
            }
          },
          footer: {
            copyright: 'Copyright'
          }
        }
      },
      ar: {
        translation: {
          header: {
            title: 'نوت بايند!'
          },
          content: {
            sideBar: {
              addFolderButton: 'اضافه مستند Folder',
              folderDialog: {
                title: {
                  new: 'New Folder',
                  edit: 'Edit Folder'
                },
                action: {
                  new: 'Add Folder',
                  edit: 'Edit'
                },
                inputLabel: 'Folder Name'
              }
            },
            note: {
              headerTag: 'Note',
              button: {
                edit: 'edit',
                delete: 'delete'
              },
              dialog: {
                label: {
                  add: 'New Note',
                  edit: 'Edit Note'
                },
                action : {
                  add: 'add',
                  edit: 'edit'
                },
                input: {
                  title: 'Title',
                  contentLabel: 'Content'
                },
                button: {cancel: 'cancel'}
              }
            }
          },
          footer: {
            copyright: 'Copyright'
          }
        }
      }
    }
  });

export default i18n;
