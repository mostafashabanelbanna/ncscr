import React, { useEffect, useState } from "react";

import { path } from "../../Path/media-path";
import moment from "moment";
import "moment/locale/ar";

import { GeneralLoading } from "../ui/LoadingScreens";
import DetailsItem from "../ui/detailsItem";
import { fetchDocumentLibraryItem } from "../../api";
import { useParams } from "react-router-dom";

const DocumentLibraryDetails = () => {
  const [documentLibraryItem, setDocumentLibraryItem] = useState({});
  let { id } = useParams();
  const getItem = async () => {
    //fetch  data
    const response = await fetchDocumentLibraryItem(id).catch((err) =>
      console.log("Error", err)
    ); //handle errors
    console.log(response);
    if (response && response.data) {
      setDocumentLibraryItem(response.data);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  if (documentLibraryItem.result) {
    return (
      <DetailsItem
        issue={documentLibraryItem.result.documentLibraryIssueName}
        publishers={documentLibraryItem.result.publishers}
        key={documentLibraryItem.result.id}
        title={documentLibraryItem.result.title_AR}
        writer={documentLibraryItem.result.writer}
        date={
          documentLibraryItem.result.publishDate
            ? String(documentLibraryItem.result.publishDate).trim().length > 4
              ? moment(new Date(documentLibraryItem.result.publishDate)).format(
                  "LL"
                )
              : documentLibraryItem.result.publishDate
            : null
        }
        content={documentLibraryItem.result.description_AR}
        imgPath={
          path.documentLibrary +
          documentLibraryItem.result.id +
          "/Photo_AR/" +
          documentLibraryItem.result.photo_AR
        }
        pdf={documentLibraryItem.result.fileName_AR}
        pdfSrc={
          path.documentLibrary + documentLibraryItem.result.id + "/fileName_AR/"
        }
      />
    );
  }

  return (
    <div>
      {" "}
      <GeneralLoading />{" "}
    </div>
  );
};

export default DocumentLibraryDetails;
