import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'

@Injectable()
export class uploadservice {
    uploadFile(file) {
        const contentType = file.type;
        const bucket = new S3(
              {
                  accessKeyId: environment.bk1,
                  secretAccessKey: environment.bk2,
                  region: environment.reg
              }
          );
          const params = {
              Bucket: environment.bucket,
              Key: Math.round(((Math.random()*100)+1)) + file.name,
              Body: file,
              ACL: 'public-read',
              ContentType: contentType
          };
          bucket.upload(params, function (err, data) {
              if (err) {
                  console.log(err);
              }
          });

        return "https://doomimg.s3.ap-northeast-2.amazonaws.com/" + params.Key;
    }
}