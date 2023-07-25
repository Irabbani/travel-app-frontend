// @flow strict

import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import AdminAccessoryTypes from '../../../src/components/admin-components/accessories/accessory-types';
import DashboardLayout from '../../../src/components/layouts/dashboard-layout';
import { getServerSideProps } from '../../../src/rest-api/accessories/accessory-type.ssr';
import serviceClient from '../../../src/rest-api/client/service-client';
import { NextPageWithLayout } from '../../../src/types/page-props';
export { getServerSideProps };

const AccessoryType: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  const accessoriesTypes = props?.accessoryTypeData?.data;
  const router = useRouter();

  // console.log(accessoriesTypes)

  const handleDelete = (id: number) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: {
          text: "Cancel",
          value: false,
          visible: true,
          closeModal: true,
        },
        confirm: {
          text: "Delete",
          value: true,
          visible: true,
          closeModal: true
        }
      }
    })
      .then(async (willDelete) => {
        if (willDelete) {
          try {
            const res = await serviceClient.accessoryType.deleteType(id)
            toast.success('Accessory type deleted successfully!');
            router.push({
              pathname: router.pathname
            });
          } catch (error) {
            toast.error('Something went wrong!')
          }
        }
      });
  }

  return (
    <>
      <AdminAccessoryTypes
        handleDelete={handleDelete}
        accessoriesTypes={accessoriesTypes}
      />
    </>
  );
};

AccessoryType.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AccessoryType;