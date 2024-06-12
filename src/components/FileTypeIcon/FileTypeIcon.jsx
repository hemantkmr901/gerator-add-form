/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { FileTypeDefaultAudioTypeGray } from "../../icons/FileTypeDefaultAudioTypeGray";
import { FileTypeDefaultAudioTypeSolid } from "../../icons/FileTypeDefaultAudioTypeSolid";
import { FileTypeDefaultCodeTypeGray } from "../../icons/FileTypeDefaultCodeTypeGray";
import { FileTypeDefaultCodeTypeSolid } from "../../icons/FileTypeDefaultCodeTypeSolid";
import { FileTypeDefaultDocumentTypeGray } from "../../icons/FileTypeDefaultDocumentTypeGray";
import { FileTypeDefaultDocumentTypeSolid } from "../../icons/FileTypeDefaultDocumentTypeSolid";
import { FileTypeDefaultImageTypeGray } from "../../icons/FileTypeDefaultImageTypeGray";
import { FileTypeDefaultImageTypeSolid } from "../../icons/FileTypeDefaultImageTypeSolid";
import { FileTypeDefaultPdfTypeGray } from "../../icons/FileTypeDefaultPdfTypeGray";
import { FileTypeDefaultPdfTypeSolid } from "../../icons/FileTypeDefaultPdfTypeSolid";
import { FileTypeDefaultSpreadsheetTypeGray } from "../../icons/FileTypeDefaultSpreadsheetTypeGray";
import { FileTypeDefaultSpreadsheetTypeSolid } from "../../icons/FileTypeDefaultSpreadsheetTypeSolid";
import { FileTypeDefaultVideo01TypeGray } from "../../icons/FileTypeDefaultVideo01TypeGray";
import { FileTypeDefaultVideo01TypeSolid } from "../../icons/FileTypeDefaultVideo01TypeSolid";
import { FileTypeDefaultVideo02TypeGray } from "../../icons/FileTypeDefaultVideo02TypeGray";
import { FileTypeDefaultVideo02TypeSolid } from "../../icons/FileTypeDefaultVideo02TypeSolid";
import { FileTypeSimpleAudioTypeDefault } from "../../icons/FileTypeSimpleAudioTypeDefault";
import { FileTypeSimpleCodeTypeDefault } from "../../icons/FileTypeSimpleCodeTypeDefault";
import { FileTypeSimpleDocumentTypeDefault } from "../../icons/FileTypeSimpleDocumentTypeDefault";
import { FileTypeSimpleEmptyTypeDefault } from "../../icons/FileTypeSimpleEmptyTypeDefault";
import { FileTypeSimpleEmptyTypeGray } from "../../icons/FileTypeSimpleEmptyTypeGray";
import { FileTypeSimpleEmptyTypeSolid } from "../../icons/FileTypeSimpleEmptyTypeSolid";
import { FileTypeSimpleFolderTypeDefault } from "../../icons/FileTypeSimpleFolderTypeDefault";
import { FileTypeSimpleFolderTypeGray } from "../../icons/FileTypeSimpleFolderTypeGray";
import { FileTypeSimpleFolderTypeSolid } from "../../icons/FileTypeSimpleFolderTypeSolid";
import { FileTypeSimpleImageTypeDefault } from "../../icons/FileTypeSimpleImageTypeDefault";
import { FileTypeSimplePdfTypeDefault } from "../../icons/FileTypeSimplePdfTypeDefault";
import { FileTypeSimpleSpreadsheetTypeDefault } from "../../icons/FileTypeSimpleSpreadsheetTypeDefault";
import { FileTypeSimpleVideo01TypeDefault } from "../../icons/FileTypeSimpleVideo01TypeDefault";
import { FileTypeSimpleVideo02TypeDefault } from "../../icons/FileTypeSimpleVideo02TypeDefault";
import "./style.css";

export const FileTypeIcon = ({
  fileType,
  type,
  fileTypeImageImgClassName,
  fileTypeWrapClassName,
  fileTypeClassName,
}) => {
  return (
    <>
      {(fileType === "archive-RAR" ||
        fileType === "archive-ZIP" ||
        fileType === "design-AEP-after-effects" ||
        fileType === "design-AI-illustrator" ||
        fileType === "design-FIG-figma" ||
        fileType === "design-INDD-indesign" ||
        fileType === "design-PSD-photoshop" ||
        fileType === "development-CSS" ||
        fileType === "development-DMG" ||
        fileType === "development-EXE" ||
        fileType === "development-HTML" ||
        fileType === "development-JAVA" ||
        fileType === "development-JSON" ||
        fileType === "development-JS" ||
        fileType === "development-RSS" ||
        fileType === "development-SQL" ||
        fileType === "development-XML" ||
        fileType === "document-CSV" ||
        fileType === "document-DOCX" ||
        fileType === "document-DOC" ||
        fileType === "document-PDF" ||
        fileType === "document-PPTX" ||
        fileType === "document-PPT" ||
        fileType === "document-TXT" ||
        fileType === "document-XLSX" ||
        fileType === "document-XLS" ||
        fileType === "image-EPS" ||
        fileType === "image-GIF" ||
        fileType === "image-IMG" ||
        fileType === "image-JPEG" ||
        fileType === "image-JPG" ||
        fileType === "image-PNG" ||
        fileType === "image-SVG" ||
        fileType === "image-TIFF" ||
        fileType === "image-webp" ||
        fileType === "media-AVI" ||
        fileType === "media-MKV" ||
        fileType === "media-MPEG" ||
        fileType === "media-WAV" ||
        fileType === "media-mp3" ||
        fileType === "media-mp4") && (
        <div className={`file-type-icon ${fileTypeImageImgClassName}`}>
          <div className={`overlap-group-3 type-${type} ${fileType}`}>
            {type === "default" && (
              <>
                <img className="page" alt="Page" src="/img/page.svg" />
                <div className={`file-type-wrap ${fileTypeWrapClassName}`}>
                  <div className={`file-type ${fileTypeClassName}`}>
                    {fileType === "image-IMG" && <>IMG</>}

                    {fileType === "image-JPG" && <>JPG</>}

                    {fileType === "image-JPEG" && <>JPEG</>}

                    {fileType === "image-PNG" && <>PNG</>}

                    {fileType === "image-webp" && <>WEBP</>}

                    {fileType === "image-TIFF" && <>TIFF</>}

                    {fileType === "image-GIF" && <>GIF</>}

                    {fileType === "image-SVG" && <>SVG</>}

                    {fileType === "image-EPS" && <>EPS</>}

                    {fileType === "document-PDF" && <>PDF</>}

                    {fileType === "document-DOC" && <>DOC</>}

                    {fileType === "document-DOCX" && <>DOCX</>}

                    {fileType === "document-TXT" && <>TXT</>}

                    {fileType === "document-CSV" && <>CSV</>}

                    {fileType === "document-XLS" && <>XLS</>}

                    {fileType === "document-XLSX" && <>XLSX</>}

                    {fileType === "document-PPT" && <>PPT</>}

                    {fileType === "document-PPTX" && <>PPTX</>}

                    {fileType === "design-FIG-figma" && <>FIG</>}

                    {fileType === "design-AI-illustrator" && <>AI</>}

                    {fileType === "design-PSD-photoshop" && <>PSD</>}

                    {fileType === "design-INDD-indesign" && <>INDD</>}

                    {fileType === "design-AEP-after-effects" && <>AEP</>}

                    {fileType === "media-mp3" && <>MP3</>}

                    {fileType === "media-mp4" && <>MP4</>}

                    {fileType === "media-AVI" && <>AVI</>}

                    {fileType === "media-WAV" && <>WAV</>}

                    {fileType === "media-MKV" && <>MKV</>}

                    {fileType === "media-MPEG" && <>MPEG</>}

                    {fileType === "archive-ZIP" && <>ZIP</>}

                    {fileType === "archive-RAR" && <>RAR</>}

                    {fileType === "development-HTML" && <>HTML</>}

                    {fileType === "development-CSS" && <>CSS</>}

                    {fileType === "development-RSS" && <>RSS</>}

                    {fileType === "development-SQL" && <>SQL</>}

                    {fileType === "development-XML" && <>XML</>}

                    {fileType === "development-JS" && <>JS</>}

                    {fileType === "development-JSON" && <>JSON</>}

                    {fileType === "development-JAVA" && <>JAVA</>}

                    {fileType === "development-EXE" && <>EXE</>}

                    {fileType === "development-DMG" && <>DMG</>}
                  </div>
                </div>
              </>
            )}

            {["gray", "solid"].includes(type) && (
              <div className="file-type-2">
                {fileType === "image-IMG" && <>IMG</>}

                {fileType === "image-JPG" && <>JPG</>}

                {fileType === "image-JPEG" && <>JPEG</>}

                {fileType === "image-PNG" && <>PNG</>}

                {fileType === "image-webp" && <>WEBP</>}

                {fileType === "image-TIFF" && <>TIFF</>}

                {fileType === "image-GIF" && <>GIF</>}

                {fileType === "image-SVG" && <>SVG</>}

                {fileType === "image-EPS" && <>EPS</>}

                {fileType === "document-PDF" && <>PDF</>}

                {fileType === "document-DOC" && <>DOC</>}

                {fileType === "document-DOCX" && <>DOCX</>}

                {fileType === "document-TXT" && <>TXT</>}

                {fileType === "document-CSV" && <>CSV</>}

                {fileType === "document-XLS" && <>XLS</>}

                {fileType === "document-XLSX" && <>XLSX</>}

                {fileType === "document-PPT" && <>PPT</>}

                {fileType === "document-PPTX" && <>PPTX</>}

                {fileType === "design-FIG-figma" && <>FIG</>}

                {fileType === "design-AI-illustrator" && <>AI</>}

                {fileType === "design-PSD-photoshop" && <>PSD</>}

                {fileType === "design-INDD-indesign" && <>INDD</>}

                {fileType === "design-AEP-after-effects" && <>AEP</>}

                {fileType === "media-mp3" && <>MP3</>}

                {fileType === "media-mp4" && <>MP4</>}

                {fileType === "media-AVI" && <>AVI</>}

                {fileType === "media-WAV" && <>WAV</>}

                {fileType === "media-MKV" && <>MKV</>}

                {fileType === "media-MPEG" && <>MPEG</>}

                {fileType === "archive-ZIP" && <>ZIP</>}

                {fileType === "archive-RAR" && <>RAR</>}

                {fileType === "development-HTML" && <>HTML</>}

                {fileType === "development-CSS" && <>CSS</>}

                {fileType === "development-RSS" && <>RSS</>}

                {fileType === "development-SQL" && <>SQL</>}

                {fileType === "development-XML" && <>XML</>}

                {fileType === "development-JS" && <>JS</>}

                {fileType === "development-JSON" && <>JSON</>}

                {fileType === "development-JAVA" && <>JAVA</>}

                {fileType === "development-EXE" && <>EXE</>}

                {fileType === "development-DMG" && <>DMG</>}
              </div>
            )}
          </div>
        </div>
      )}

      {fileType === "simple-image" && <FileTypeSimpleImageTypeDefault className="instance-node" />}

      {fileType === "simple-folder" && type === "default" && (
        <FileTypeSimpleFolderTypeDefault className="instance-node" />
      )}

      {fileType === "simple-empty" && type === "default" && (
        <FileTypeSimpleEmptyTypeDefault className="instance-node" />
      )}

      {type === "gray" && fileType === "default-image" && <FileTypeDefaultImageTypeGray className="instance-node" />}

      {fileType === "simple-folder" && type === "gray" && <FileTypeSimpleFolderTypeGray className="instance-node" />}

      {fileType === "simple-empty" && type === "gray" && <FileTypeSimpleEmptyTypeGray className="instance-node" />}

      {type === "solid" && fileType === "default-image" && <FileTypeDefaultImageTypeSolid className="instance-node" />}

      {type === "solid" && fileType === "simple-folder" && <FileTypeSimpleFolderTypeSolid className="instance-node" />}

      {type === "solid" && fileType === "simple-empty" && <FileTypeSimpleEmptyTypeSolid className="instance-node" />}

      {fileType === "simple-video-01" && <FileTypeSimpleVideo01TypeDefault className="instance-node" />}

      {type === "gray" && fileType === "default-video-01" && (
        <FileTypeDefaultVideo01TypeGray className="instance-node" />
      )}

      {type === "solid" && fileType === "default-video-01" && (
        <FileTypeDefaultVideo01TypeSolid className="instance-node" />
      )}

      {fileType === "simple-video-02" && <FileTypeSimpleVideo02TypeDefault className="instance-node" />}

      {fileType === "default-video-02" && type === "gray" && (
        <FileTypeDefaultVideo02TypeGray className="instance-node" />
      )}

      {type === "solid" && fileType === "default-video-02" && (
        <FileTypeDefaultVideo02TypeSolid className="instance-node" />
      )}

      {fileType === "simple-audio" && <FileTypeSimpleAudioTypeDefault className="instance-node" />}

      {fileType === "default-audio" && type === "gray" && <FileTypeDefaultAudioTypeGray className="instance-node" />}

      {type === "solid" && fileType === "default-audio" && <FileTypeDefaultAudioTypeSolid className="instance-node" />}

      {fileType === "simple-PDF" && <FileTypeSimplePdfTypeDefault className="instance-node" />}

      {type === "gray" && fileType === "default-PDF" && <FileTypeDefaultPdfTypeGray className="instance-node" />}

      {type === "solid" && fileType === "default-PDF" && <FileTypeDefaultPdfTypeSolid className="instance-node" />}

      {fileType === "simple-document" && <FileTypeSimpleDocumentTypeDefault className="instance-node" />}

      {type === "gray" && fileType === "default-document" && (
        <FileTypeDefaultDocumentTypeGray className="instance-node" />
      )}

      {type === "solid" && fileType === "default-document" && (
        <FileTypeDefaultDocumentTypeSolid className="instance-node" />
      )}

      {fileType === "simple-spreadsheet" && <FileTypeSimpleSpreadsheetTypeDefault className="instance-node" />}

      {fileType === "default-spreadsheet" && type === "gray" && (
        <FileTypeDefaultSpreadsheetTypeGray className="instance-node" />
      )}

      {type === "solid" && fileType === "default-spreadsheet" && (
        <FileTypeDefaultSpreadsheetTypeSolid className="instance-node" />
      )}

      {fileType === "simple-code" && <FileTypeSimpleCodeTypeDefault className="instance-node" />}

      {fileType === "default-code" && type === "gray" && <FileTypeDefaultCodeTypeGray className="instance-node" />}

      {type === "solid" && fileType === "default-code" && <FileTypeDefaultCodeTypeSolid className="instance-node" />}
    </>
  );
};

FileTypeIcon.propTypes = {
  fileType: PropTypes.oneOf([
    "simple-document",
    "simple-spreadsheet",
    "image-SVG",
    "development-JAVA",
    "image-IMG",
    "document-TXT",
    "development-RSS",
    "development-EXE",
    "document-XLS",
    "image-PNG",
    "development-SQL",
    "simple-PDF",
    "development-HTML",
    "default-spreadsheet",
    "default-code",
    "document-CSV",
    "document-XLSX",
    "image-JPEG",
    "design-AI-illustrator",
    "design-INDD-indesign",
    "media-mp3",
    "archive-RAR",
    "document-PPT",
    "development-JSON",
    "development-DMG",
    "media-MKV",
    "image-GIF",
    "simple-audio",
    "media-WAV",
    "default-audio",
    "simple-empty",
    "image-TIFF",
    "document-DOCX",
    "media-MPEG",
    "design-PSD-photoshop",
    "image-EPS",
    "development-JS",
    "default-PDF",
    "design-AEP-after-effects",
    "media-AVI",
    "default-image",
    "archive-ZIP",
    "simple-folder",
    "development-CSS",
    "design-FIG-figma",
    "image-webp",
    "simple-image",
    "simple-video-02",
    "development-XML",
    "default-document",
    "simple-video-01",
    "default-video-01",
    "document-PPTX",
    "simple-code",
    "document-DOC",
    "document-PDF",
    "media-mp4",
    "default-video-02",
    "image-JPG",
  ]),
  type: PropTypes.oneOf(["gray", "solid", "default"]),
};
