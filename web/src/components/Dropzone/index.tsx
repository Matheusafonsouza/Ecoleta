//imports
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './styles.css';

//typescript interfaces
interface Props {
    onFileUploaded: (file: File) => void;
}

//component
const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
    //states
    const [selectedFileUrl, setSelectedFileUrl] = React.useState('');

    //functions
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const fileUrl = URL.createObjectURL(file);
        setSelectedFileUrl(fileUrl);
        onFileUploaded(file);
    }, [onFileUploaded]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*'
    })

    //render component
    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} accept='image/*' />

            { selectedFileUrl
                ? <img src={selectedFileUrl} alt="Point thumbnail" />
                : (
                    <p>
                        <FiUpload />
                        Imagem do estabelecimento
                    </p>
                )
            }
        </div>
    )
}

export default Dropzone;